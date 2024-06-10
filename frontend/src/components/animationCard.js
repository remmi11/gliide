import Grid from "@mui/material/Grid";
import { Card, Typography, Box, Avatar } from "@mui/material";
import Link from "@mui/material/Link";
import { UserAvatar } from "./avatar";
import { FlexBox } from "./flexbox";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

export default function AnimationCard({ type = 0, data }) {
  return (
    <Card className={`animation-card animation-${type}`}>
      <CardContent>
        {data ? (
          <>
            <Typography variant="h4" gutterBottom>
              {type}.
            </Typography>
            <FlexBox sx={{ alignItems: "center", justifyContent: "center" }}>
              <FlexBox className="img-box">
                <a href={data?.person?.linkedInUrl} target="_blank">
                  <UserAvatar
                    src={data?.person?.photoUrl}
                    className="primary circle"
                  />
                </a>
                <a href={data?.company?.linkedInUrl} target="_blank">
                  <UserAvatar
                    className="secondary"
                    src={data?.company?.logo}
                  ></UserAvatar>
                </a>
              </FlexBox>
              <FlexBox
                className="info-box"
                sx={{ flexDirection: "column" }}
                pl={3}
              >
                <div className="info-name">{`${data?.person?.firstName} ${data?.person?.lastName}`}</div>
                <div className="info-position">{data?.person?.headline}</div>
                {type > 6 && data?.person?.phoneNumbers && data?.person?.phoneNumbers.length > 0 &&
                  <div className="info-phone">{data?.person?.phoneNumbers[0]}</div>}
                <FlexBox sx={{ columnGap: 1 }} className="social-box">
                  <Link
                    href={data?.person?.linkedInUrl}
                    className="social-1"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </Link>
                  <Link href="" className="social-2" target="_blank">
                    <InstagramIcon />
                  </Link>
                  <Link href="" className="social-3" target="_blank">
                    <XIcon />
                  </Link>
                </FlexBox>
              </FlexBox>
            </FlexBox>
          </>
        ) : (
          <FlexBox columnGap={2}>
            <Skeleton variant="circular" width={100} height={100} />
            <Box flex={1}>
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <FlexBox columnGap={2} mt={2}>
                <Skeleton variant="circular" width={30} height={30} />
                <Skeleton variant="circular" width={30} height={30} />
                <Skeleton variant="circular" width={30} height={30} />
              </FlexBox>
            </Box>
          </FlexBox>
        )}
      </CardContent>
    </Card>
  );
}
