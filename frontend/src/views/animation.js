import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import AnimationCard from "../components/animationCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { publicApi } from "../services/api";

export default function Animation() {
  const { linkedinId } = useParams();
  const [userInfo, setUserInfo] = useState(null);

  const getUserLinkedin = async () => {
    try {
      const res = await publicApi.get(`/api/v1/linkedin/${linkedinId}`);
      setUserInfo({ ...res, data: JSON.parse(res.data) });
    } catch (e) {}
  };

  useEffect(() => {
    getUserLinkedin();
  }, []);

  return (
    <div>
      <Typography variant="h4" align="center" fontWeight={600}>
        Select Animation:
      </Typography>
      <Box mt={5}>
        <Grid container spacing={4} sx={{ maxWidth: 1100, mx: "auto" }}>
          {new Array(12).fill("").map((v, index) => (
            <Grid item xs={6} key={index}>
              <AnimationCard type={index + 1} data={userInfo?.data} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
