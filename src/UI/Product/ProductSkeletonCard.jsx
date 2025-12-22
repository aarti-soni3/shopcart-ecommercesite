import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Skeleton, Stack } from "@mui/material";

export default function ProductSkeletonCard() {
  return (
    <>
      <Card
        sx={{ minWidth: 210, maxWidth: 210, minHeight: 350, maxHeight: 350 }}
      >
        <Skeleton height={190} animation="wave" variant="rectangular" />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            pb: 0,
            placeItems: "flex-start",
          }}
        >
          <Skeleton
            height={10}
            width={"30%"}
            animation="wave"
            variant="rounded"
            sx={{ mb: 1.4 }}
          />
          <Skeleton
            height={10}
            width={"90%"}
            animation="wave"
            variant="rounded"
            sx={{ mb: 1.4 }}
          />
          <Stack direction={"row"} gap={1} width={"100%"}>
            <Skeleton
              height={22}
              width={"50%"}
              animation="wave"
              variant="rounded"
              sx={{ mb: 2 }}
            />
            <Skeleton
              height={22}
              width={"30%"}
              animation="wave"
              variant="rounded"
              sx={{ mb: 2 }}
            />
          </Stack>
          <Stack
            direction={"row"}
            gap={4}
            width={"100%"}
            justifyContent={"space-between"}
          >
            <Stack sx={{ placeItems: "flex-start" }} width={"100%"}>
              <Skeleton
                height={18}
                width={"55%"}
                animation="wave"
                variant="rounded"
                sx={{ mb: 1.4 }}
              />
              <Stack direction={"row"} gap={1} width={"100%"}>
                <Skeleton
                  height={12}
                  width={"40%"}
                  animation="wave"
                  variant="rounded"
                />
                <Skeleton
                  height={12}
                  width={"40%"}
                  animation="wave"
                  variant="rounded"
                />
              </Stack>
            </Stack>
            <Skeleton
              height={35}
              width={60}
              animation="wave"
              variant="circular"
              sx={{mt:0.5,mr:1}}
            />
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
