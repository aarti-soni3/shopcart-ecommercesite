import { deleteApp, initializeApp, getApps } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";

// Global flag to prevent concurrent executions
let isSeedingInProgress = false;

export const addAPIUsersToAuth = async (usersList) => {
  // Prevent concurrent executions
  if (isSeedingInProgress) {
    console.warn("Seeding already in progress, skipping...");
    return [];
  }

  isSeedingInProgress = true;
  let count = 0;
  const SECONDRY_APP_NAME = "secondryAppForSeeding";
  let secondryApp = null;

  try {
    console.log(`Starting bulk auth creation for ${usersList.length} users`);

    // Check if secondary app already exists and clean it up
    const existingApp = getApps().find(app => app.name === SECONDRY_APP_NAME);
    if (existingApp) {
      try {
        await deleteApp(existingApp);
        console.log("Cleaned up existing secondary app");
        // Wait a bit to ensure cleanup is complete
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        console.warn("Error cleaning up existing app:", error.message);
      }
    }

    // Initialize secondary app
    secondryApp = initializeApp(firebaseConfig, SECONDRY_APP_NAME);
    const secondaryAuth = getAuth(secondryApp);

    const results = [];

    // Process users sequentially
    for (const user of usersList) {
      try {
        if (!user.email || !user.password) {
          console.warn(`Skipping user: missing email or password`);
          continue;
        }

        const userCredential = await createUserWithEmailAndPassword(
          secondaryAuth,
          user.email,
          user.password
        );

        count += 1;
        console.log(`✓ Created Auth for: ${user.email}`);

        const result = { 
          apiId: user.id, 
          firebaseUid: userCredential.user.uid 
        };
        
        results.push(result);
        
        console.log(`  API ID: ${user.id} → Firebase UID: ${userCredential.user.uid}`);

      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          console.warn(`⚠ Skipping ${user.email}: Already exists.`);
        } else {
          console.error(`✗ Failed to create ${user.email}:`, error.message);
        }
      }
    }

    console.log(`✓ Bulk auth creation complete: ${count} users created`);
    
    return results;

  } catch (error) {
    console.error("Fatal error during seeding:", error);
    return [];
  } finally {
    // Clean up secondary app with proper delay
    if (secondryApp) {
      try {
        // Wait for any pending operations to complete
        await new Promise(resolve => setTimeout(resolve, 500));
        await deleteApp(secondryApp);
        console.log("Secondary app deleted successfully");
      } catch (error) {
        console.warn("Error deleting secondary app:", error.message);
      }
    }
    
    // Reset the flag
    isSeedingInProgress = false;
  }
};