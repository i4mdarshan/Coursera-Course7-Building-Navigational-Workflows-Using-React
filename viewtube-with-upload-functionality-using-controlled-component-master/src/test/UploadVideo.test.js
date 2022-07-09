import { unmountComponentAtNode } from "react-dom";
import { act, render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import user from '@testing-library/user-event';

let container = null;
describe('Test for Upload Video Fields', () => {

    beforeEach(async () => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
        act(() => {
            render(<App />, container);
        });
        var navlink = document.getElementById('uploadVideo');
        await act(async () => {
            navlink.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        });
    });

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('should have input fields in the video upload form', async () => {
        const inputElement = document.getElementsByTagName("input");
        expect(inputElement.length).toBeGreaterThan(0);
    });

    it('should have 2 save buttons in the video upload form', async () => {
        const button = document.getElementsByClassName("MuiButton-label")
        expect(button.length).toBeGreaterThan(1);
        expect(button[0].textContent).toBe("Save");
    });

    it('should have video url textfield in the video upload form', async () => {
        const url = screen.getByLabelText(/videourl/i);
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value").set;
        nativeInputValueSetter.call(url, 'some.url');
        act(() => {
            let ev = new Event('change', { bubbles: true });
            url.dispatchEvent(ev);
        })
        expect(url).toBeInTheDocument();
        expect(url).toHaveAttribute('value', "some.url")
    });
    it('should have video thumbnail url textfield in the video upload form', async () => {
        const url = screen.getByLabelText(/videothumbnailurl/i);
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value").set;
        nativeInputValueSetter.call(url, 'some.url');
        act(() => {
            let ev = new Event('change', { bubbles: true });
            url.dispatchEvent(ev);
        })
        expect(url).toBeInTheDocument();
        expect(url).toHaveAttribute('value', "some.url")
    });
    it('Contains a textbox with name Title', () => {
        const title = screen.getByLabelText(/videotitle/i)
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value").set;
        nativeInputValueSetter.call(title, 'randomTitle');
        act(() => {
            let ev = new Event('change', { bubbles: true });
            title.dispatchEvent(ev);
        })
        expect(title).toBeInTheDocument();
        expect(title.value).toBe('randomTitle');
    });

    it('Contains a textbox with name containing description', () => {
        const description = screen.getByLabelText(/description/i);
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLTextAreaElement.prototype,
            "value").set;
        nativeInputValueSetter.call(description, 'randomDescription');
        act(() => {
            let ev = new Event('change', { bubbles: true });
            description.dispatchEvent(ev);
        })
        expect(description).toBeInTheDocument();
        expect(description.value).toBe('randomDescription');
    });

    it('Contains a textbox with name containing video duration', () => {
        const videoDuration = screen.getByLabelText(/videoduration/i)
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value").set;
        nativeInputValueSetter.call(videoDuration, 'PT3M57S');
        act(() => {
            let ev = new Event('change', { bubbles: true });
            videoDuration.dispatchEvent(ev);
        })
        expect(videoDuration).toBeInTheDocument();
        expect(videoDuration.value).toBe('PT3M57S');
    });

    it('Contains a textbox with name containing channel title', () => {
        const channelTitle = screen.getByLabelText(/channeltitle/i);
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value").set;
        nativeInputValueSetter.call(channelTitle, 'Random Channel Title');
        act(() => {
            let ev = new Event('change', { bubbles: true });
            channelTitle.dispatchEvent(ev);
        })
        expect(channelTitle).toBeInTheDocument();
        expect(channelTitle.value).toBe('Random Channel Title');
    });


    it('Contains a button which when clicked shows Los angels as option', async () => {
        const videoLocation = screen.getByLabelText(/videolocation/i);
        user.click(videoLocation);
        const result = await waitFor(() => screen.findByText(/los angels/i), {
            timeout: 3000,
        });
        expect(result).toBeInTheDocument();
    });
    it('Contains a label license which when clicked shows creative common license as option', async () => {
        const license = screen.getByLabelText(/license/i);
        user.click(license);
        const result = await waitFor(
            () => screen.findByText(/creative common license/i),
            {
                timeout: 3000,
            }
        );
        expect(result).toBeInTheDocument();
    });
    it('Contains a label distribution which when clicked shows everywhere as option', async () => {
        const distribution = screen.getByLabelText(/distribution/i);
        user.click(distribution);
        const result = await waitFor(() => screen.findByText(/everywhere/i), {
            timeout: 3000,
        });
        expect(result).toBeInTheDocument();
    });
    it('Contains a label video category which when clicked shows comedy as option', async () => {
        const videoCategory = screen.getByLabelText(/videocategory/i);
        user.click(videoCategory);
        const result = await waitFor(() => screen.findByText(/comedy/i), {
            timeout: 3000,
        });
        expect(result).toBeInTheDocument();
    });
    it('Contains a label visibility which when clicked shows private as option', async () => {
        const visibility = screen.getByLabelText(/visibility/i);
        user.click(visibility);
        const result = await waitFor(() => screen.findByText(/private/i), {
            timeout: 3000,
        });
        expect(result).toBeInTheDocument();
    });

    it(`Contains a radio with name 'yes, it's made for kids' which when clicked shows "Yes, it's made for kids." as value`, async () => {
        const audienceRadio = screen.getByRole('radio', {
            name: /yes, it's made for kids\./i,
        });
        user.click(audienceRadio);
        expect(audienceRadio.value).toBe("Yes, it's made for kids.");
    });
});

describe('Test for error text when important fields are left blank', () => {
    jest.setTimeout(50000);
    beforeEach(async () => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
        act(() => {
            render(<App />, container);
        });

        var navlink = document.getElementById('uploadVideo');
        await act(async () => {
            navlink.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        });
    });

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it(`shows error message when video url is in wrong format then error is 'The Url doesn't matches'`, async () => {
        const url = screen.getByLabelText(/videourl/i);
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value").set;
        nativeInputValueSetter.call(url, 'someurl');
        act(() => {
            let ev = new Event('change', { bubbles: true });
            url.dispatchEvent(ev);
        })
        url.focus();
        url.blur();

        const result = await waitFor(
            () => screen.findByText(/The Url doesn't matches the ViewTube Embed Url Format/i),
            {
                timeout: 3000,
            }
        );
        expect(result).toBeInTheDocument();
    });

    it(`shows error message 'video title is required' when video title is not entered`, async () => {
        const title = screen.getByLabelText(/videotitle/i);
        title.focus();
        title.blur();

        const result = await waitFor(
            () => screen.findByText(/video title is required/i),
            {
                timeout: 3000,
            }
        );
        expect(result).toBeInTheDocument();
    });

    it(`shows error message 'video channel title is required' when channel title is not entered`, async () => {
        const channelTitle = screen.getByLabelText(/channeltitle/i);
        channelTitle.focus();
        channelTitle.blur();

        const result = await waitFor(
            () => screen.findByText(/video channel title is required/i),
            {
                timeout: 3000,
            }
        );
        expect(result).toBeInTheDocument();
    });



});

