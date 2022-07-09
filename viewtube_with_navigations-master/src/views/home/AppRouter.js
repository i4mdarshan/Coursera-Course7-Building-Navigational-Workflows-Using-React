// The AppRouter component contains the Route Configuration code.

// The routes should be configured for following path URLs:

// 1. default route should be redirecting to "/videos"
// 2. All the routes related to videos should be configured as nested routes​
//    2.a /videos -> to Home Component that displays video list​
//    2.b /videos/:videoId -> to WatchView to view the selected video
//    2.c /videos/studio -> to Studio view to upload new video
// 3. Invalid route url should redirect to PageNotFound component

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { viewTubeTheme } from '../../components/home/AppThemes';
// Add necessary imports for Router components


export default function AppRouter() {
  return (
    <ThemeProvider theme={viewTubeTheme}>
      <CssBaseline>
        {/* Provide Route Configuration Code Here.... */}
      </CssBaseline>
    </ThemeProvider>
  )
}
