import { Stack, Typography } from "@mui/material";
import { paramsContainer } from "../types/common";

export default function RouteName({currentContent, setCurrentContent}: paramsContainer) {
  return (
    <div>
      <Typography variant="h4" sx={{ fontWeight: 500 }}>
        Mauricio Reina
      </Typography>
      <Stack direction="row" spacing={1}>
        <Typography sx={{ fontWeight: 500, cursor:'pointer' }} onClick={()=> setCurrentContent(1)}>
          Home
        </Typography>
        <Typography sx={{ fontWeight: 500 }}>
          {currentContent == 1 ? '' : currentContent == 2 ? ' ->  Services' : ' ->  Technologies'}
        </Typography>
      </Stack>
    </div>
  );
}