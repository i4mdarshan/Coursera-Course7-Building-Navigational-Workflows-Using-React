import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import UploadVideo from '../components/UploadVideo';
import user from '@testing-library/user-event';

describe('Test for Upload Video Fields', () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
    render(<UploadVideo/>);
  });

  it('Contains a textbox with name containing videourl', () => {
    const videoUrl = screen.getByLabelText(/videourl/i);
    user.type(videoUrl, 'randomUrl');
    expect(videoUrl.value).toBe('randomUrl');
  });

  it('Contains a textbox with name Title*', () => {
    const title = screen.getByRole('textbox', {
      name: /videotitle/i,
    });
    user.type(title, 'randomTitle');
    expect(title.value).toBe('randomTitle');
  });

  it('Contains a textbox with name containing description', () => {
    const description = screen.getByRole('textbox', {
      name: /description/i,
    });

    user.type(description, 'randomDescription');
    expect(description.value).toBe('randomDescription');
  });

  it('Contains a textbox with name containing video duration', () => {
    const videoDuration = screen.getByRole('textbox', {
      name: /videoduration/i,
    });

    user.type(videoDuration, 'PT3M57S');
    expect(videoDuration.value).toBe('PT3M57S');
  });

  it('Contains a textbox with name containing channel title', () => {
    const channelTitle = screen.getByRole('textbox', {
      name: /videochanneltitle/i,
    });

    user.type(channelTitle, 'randomTitle');
    expect(channelTitle.value).toBe('randomTitle');
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

  it('Contains two buttons with value as save', () => {
    const button = screen.getAllByRole('button', {
      name: /save/i,
    });
    expect(button.length).toBe(2);
  });
});

describe('Test for error text when important fields are left blank', () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
    render(<UploadVideo handleSaveVideo={onsubmit} />);
  });

  it(`shows error message 'video channel title is required' when channel title is left blank`, async () => {
    const videoUrl = screen.getByRole('textbox', { name: /videourl/i });
    user.type(videoUrl, 'randomUrl');

    const button = screen.getAllByRole('button', {
      name: /save/i,
    });
    user.click(button[0]);
    const result = await waitFor(
      () => screen.findByText(/video channel title is required/i),
      {
        timeout: 3000,
      }
    );
    expect(result).toBeInTheDocument();
  });

  it(`shows error message 'video url is required' when video url is left blank`, async () => {
    const channelTitle = screen.getByRole('textbox', {
      name: /channeltitle/i,
    });
    user.type(channelTitle, 'randomTitle');
    const title = screen.getByRole('textbox', {
      name: /videotitle/i,
    });
    user.type(title, 'randomTitle');

    const button = screen.getAllByRole('button', {
      name: /save/i,
    });
    user.click(button[0]);
    const result = await waitFor(
      () => screen.findByText(/video url is required/i),
      {
        timeout: 3000,
      }
    );
    expect(result).toBeInTheDocument();
  });
  it(`shows error message 'Enter valid url' when video url is not entered in valid format`, async () => {
    const videoUrl = screen.getByLabelText(/videourl/i);
    user.type(videoUrl, 'Invalid url pattern');
    const button = screen.getAllByRole('button', {
      name: /save/i,
    });
    user.click(button[0]);
    const result = await waitFor(
      () => screen.findByText(/Enter valid url/i),
      {
        timeout: 3000,
      }
    );
    expect(result).toBeInTheDocument();
  });

  it(`shows error message 'video title is required' when video title is left blank`, async () => {
    const channelTitle = screen.getByRole('textbox', {
      name: /channeltitle/i,
    });
    user.type(channelTitle, 'randomTitle');

    const videoUrl = screen.getByRole('textbox', { name: /videourl/i });
    user.type(videoUrl, 'randomUrl');

    const button = screen.getAllByRole('button', {
      name: /save/i,
    });
    user.click(button[0]);
    const result = await waitFor(
      () => screen.findByText(/video title is required/i),
      {
        timeout: 3000,
      }
    );
    expect(result).toBeInTheDocument();
  });
});
