import Grid from "@mui/material/Grid";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { publicApi } from "../services/api";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { Box } from "@mui/material";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [linkedinUrl, setLinkedinURL] = useState(null);

  const onBuildSignature = async () => {
    if (linkedinUrl) {
      setLoading(true);
      try {
        const res = await publicApi.post("/api/v1/linkedin", {
          url: linkedinUrl,
        });

        const linkedinId = JSON.parse(res.data).persion.linkedInIdentifier;
        navigate(`/select-animation/${linkedinId}`);
      } catch (e) {
        setLoading(false);
        NotificationManager.error(e.error);
      }
    }
  };

  return (
    <Grid container spacing={2} style={{ zIndex: 1 }}>
      <Grid
        item
        xs={6}
        md={6}
        sx={{
          margin: "auto",
          fontSize: "31px",
          fontWeight: "bold",
          paddingLeft: "10% !important",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "10px" }}>Build</div>
          <div className="slide-right" style={{ color: "#ad6089" }}>
            AI-Powered
          </div>
        </div>
        <div>
          Email Signatures
          <span
            style={{
              fontSize: "20px",
              fontWeight: "400",
              fontStyle: "italic",
              marginLeft: "5px",
            }}
          >
            in seconds.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            padding: "15px",
            width: "fit-content",
            background: "rgb(173, 96, 137)",
            borderRadius: "16px",
            border: "10px solid white",
            margin: "30px 0px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Copy & Paste Your Linked in URL"
            onChange={(e) => setLinkedinURL(e.target.value)}
            variant="outlined"
            sx={{
              background: "white",
              minWidth: "300px",
              borderColor: "white",
              marginRight: "10px",
            }}
          />
          <LoadingButton
            variant="contained"
            onClick={onBuildSignature}
            loading={loading}
          >
            Build
          </LoadingButton>
        </div>
        <div style={{ marginBottom: "50px", display: "flex" }}>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "400",
              fontStyle: "italic",
              marginTop: "4px",
              color: "#4e4e4e",
            }}
          >
            ...works with
          </span>
          <img
            style={{
              width: "36px",
              marginLeft: "16px",
              height: "28px",
              marginRight: "6px",
            }}
            src="images/google.png"
          />
          <span
            style={{
              fontWeight: "400",
              color: "#4e4e4e",
              fontSize: "25px",
            }}
          >
            Gmail
          </span>
          <img
            style={{
              width: "36px",
              marginLeft: "14px",
              marginRight: "5px",
              marginBottom: "9px",
            }}
            src="images/outlook.png"
          />
          <span
            style={{
              fontWeight: "400",
              color: "#346faf",
              fontSize: "25px",
            }}
          >
            Outlook
          </span>
        </div>
      </Grid>
      <Grid item xs={6} md={6}>
        <Box component="img" src="images/profile-card.png" width={"90%"} />
      </Grid>
    </Grid>
  );
}
