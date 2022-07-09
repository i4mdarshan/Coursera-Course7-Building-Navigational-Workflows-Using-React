// This component code is used to show preview of video to be uploaded
// This component is loaded by Studio view along side the UploadVideo component.

import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

import Watch from '../watchvideo/Watch';

export default function VideoDetailsPreview(props) {

  return (
    <Card>
      <CardHeader
        title={props.videoTitle}
      />

      { props?.videoUrl ? <Watch videoSource={props?.videoUrl} /> : ""}

      <CardContent>
        {
          (props?.videoDescription) ?
            <div>
              <Typography variant="h6" gutterBottom>
                Description
              </Typography>
              <Typography variant="body2" gutterBottom>
                {props.videoDescription}
              </Typography>
            </div>
            : ""
        }

        {
          (props?.visibility) ?
            <Typography variant="body2" gutterBottom>
              {`Visibility - ${props.visibility}`}
            </Typography>
            : ""
        }

        {
          (props?.distribution) ?
            <Typography variant="body2" gutterBottom>
              {`Distribution - ${props.distribution}`}
            </Typography>
            : ""
        }

        {
          (props?.license) ?
            <Typography variant="body2" gutterBottom>
              {`License - ${props.license}`}
            </Typography>
            : ""
        }
      </CardContent>
    </Card>
  )
}
