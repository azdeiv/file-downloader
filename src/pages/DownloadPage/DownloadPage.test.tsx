import * as React from 'react';

import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import DownloadPage from './DownloadPage';

describe('<DownloadPage />', () => {
  test('DownloadPage renders correctly', () => {
    render(<DownloadPage />);
    const page = screen.getByText('File Download Page');
    expect(page).toBeInTheDocument();
  });

  test('Select all checkbox works correctly', () => {
    render(<DownloadPage />);
    const initialSelection = screen.getByText('None Selected');
    expect(initialSelection).toBeInTheDocument();

    const checkBoxes = screen.getAllByTestId('checkbox');
    const selectAllBox = checkBoxes[0];

    userEvent.click(selectAllBox);
    const allSelection = screen.getByText('Selected 2');
    expect(allSelection).toBeInTheDocument();
  });

  test('Download button works correctly', () => {
    render(<DownloadPage />);
    const checkBoxes = screen.getAllByTestId('checkbox');
    const checkbox = checkBoxes[2];

    const downloadButton = screen.getByTestId('button');
    expect(downloadButton).toBeDisabled();

    userEvent.click(checkbox);
    expect(downloadButton).not.toBeDisabled();
  });
});
