# ViewTube With Upload Functionality Using Controlled Component

## Context

OTT – Over-the-top media is no longer the future of entertainment but is now the reality.​
With over 50% of North Americans maintaining Netflix subscriptions, it is evident that the consumers love OTT content. It is the most popular form of entertainment today across all age groups. ​
All that a consumer needs to have, is a compatible hardware device enabled with a good internet connection.​

An “over-the-top” media service is an online content provider that offers streaming media as a standalone product. An OTT conversation largely revolves around video-on-demand. However, it also supports audio, messaging, and VOIP.​

Any application or service that provides a product over the internet while bypassing traditional media services is an OTT application.​
Popular OTT applications for video streaming are Netflix, Amazon Video, YouTube, HBO, etc.​

The Front-end development team at eZone created the ViewTube application which rendered videos as cards with brief description, the number of views, the duration since it was published, and the length of video. The team was able to search for a particular video using the search box.​

The team now wants to add a new feature that can be used to quickly upload a new video with various details such as title, description, audience type, age restriction, tags, visibility, license and distribution.​

As a React developer, you need to create a simple form to upload the videos and their details. You should ensure that all validations are checked properly and display appropriate validation error messages to the users to make the form user-friendly.​

## Problem Statement

 This practice exercise is a continuation of the previous exercise where videos are styled and rendered using MUI design components. Create a video upload form to add a new video which has various fields as given in the boilerplate. Ensure that the submit button should be disabled if any input field is violating validation. Make sure that after the form submission, the newly added video is available in the Home page.​ Refer to the [ViewTube Upload Form Mockup](ViewZone-UploadForm.png) for UI requirements. Following are the things that learners have to complete:

1. Video upload form fields should contain
    - Video url (Mandatory, Valid URL pattern)
    - Video Thumbnail url (Valid URL pattern)
    - Video Title (Mandatory, Max length:120)
    - video Description
    - Video Duration (valid duration pattern)
    - Channel Title (Mandatory)
    - Audience Type (Radio Button)
        - Yes,its made for Kids
        - Not for kids
    - Age Restriction  (Radio Button)
        - Yes, Restrict my videos to viewers over 18
        - No, don't restrict my videos to viewers over 18  
    - Tags (Chip list)
    - Recording Date
    - Video Location (Drop down for places) 
    - License (Drop Down)
        - Standard Viewtube License
        - Creative Common License
    - Distribution (Drop down)
        - Everywhere
        - Make this video available only on monetized platforms
    - Video Category (Drop down)
        - Film & Animation
        - Autos & Vehicles
        - Music
        - Pets & Animals
        - Sports
        - Travel & Events
        - Gaming
        - People & Blogs
        - Comedy
        - Entertainment
        - News & Politics
        - Howto & Style
        - Education
        - Science & Technology
        - Nonprofits & Activism 
    - Visibility (Mandatory)
        - private
        - public
2. Custom Validators should be used for form fields appropriately
3. Custom validators has to be created to check that video url is of valid pattern
   - Hint: Valid Url: https://www.youtube.com/embed/1ArVtCQqQRE
4. On clicking the save button, valid form should be submitted. 

### Instructions

1. Download and unzip the boilerplate code.
2. Run the command npm install to install the dependencies. 
3. Open the boilerplate code in VSCode to develop the assignment solution. 
4. The boilerplate consists of the solution code for the ViewTube app. 
5. The boilerplate also contains the videoColln.json file located inside the data folder.
6. The video data is by default imported into the component, and you can use those data directly.
7. Edit UploadView component in the component folder. 
8. Edit UploadVideoView component in the views folder.
9. Edit `App.js` and `VideoList.js`code to make the UploadVideoView component available when the `Upload Video` icon is clicked using the comments given in the boilerplate.
10. Do not **change** the existing code in `App.js`,`ApplicationBar.js` files to ensure that codes are not broken while testing. 
11. Zip the solution code with the name same as assignment name. 
12. Upload the zipped solution for submission. 
