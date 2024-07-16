import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react'; 
import App from './App';

test('calculates probability of disease given positive test', async () => {
  await act(async () => {
    render(<App />);
  });

  await act(async () => {
    fireEvent.change(screen.getByLabelText(/Prevalence/i), { target: { value: '10' } });
    fireEvent.change(screen.getByLabelText(/Sensitivity/i), { target: { value: '90' } });
    fireEvent.change(screen.getByLabelText(/Specificity/i), { target: { value: '85' } });

    fireEvent.click(screen.getByText(/Calculate/i));
  });

  expect(screen.getByText(/Probability of disease given positive test/i)).toBeInTheDocument();
  expect(screen.getByText(/Probability of no disease given negative test/i)).toBeInTheDocument();
});

test('handles edge cases for input values', async () => {
  await act(async () => {
    render(<App />);
  });

  // Test case for zero prevalence
  await act(async () => {
    fireEvent.change(screen.getByLabelText(/Prevalence/i), { target: { value: '0' } });
    fireEvent.change(screen.getByLabelText(/Sensitivity/i), { target: { value: '90' } });
    fireEvent.change(screen.getByLabelText(/Specificity/i), { target: { value: '85' } });

    fireEvent.click(screen.getByText(/Calculate/i));
  });
  expect(screen.getByText(/Probability of disease given positive test/i).textContent).toBe('Probability of disease given positive test: 0.00%');

  // Test case for 100% prevalence
  await act(async () => {
    fireEvent.change(screen.getByLabelText(/Prevalence/i), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText(/Sensitivity/i), { target: { value: '90' } });
    fireEvent.change(screen.getByLabelText(/Specificity/i), { target: { value: '85' } });

    fireEvent.click(screen.getByText(/Calculate/i));
  });
  expect(screen.getByText(/Probability of disease given positive test/i).textContent).toBe('Probability of disease given positive test: 100.00%');
});

test('calculates probability with 20% prevalence, 80% sensitivity, 70% specificity', async () => {
  await act(async () => {
    render(<App />);
  });

  await act(async () => {
    fireEvent.change(screen.getByLabelText(/Prevalence/i), { target: { value: '20' } });
    fireEvent.change(screen.getByLabelText(/Sensitivity/i), { target: { value: '80' } });
    fireEvent.change(screen.getByLabelText(/Specificity/i), { target: { value: '70' } });

    fireEvent.click(screen.getByText(/Calculate/i));
  });

  expect(screen.getByText(/Probability of disease given positive test/i)).toBeInTheDocument();
  expect(screen.getByText(/Probability of no disease given negative test/i)).toBeInTheDocument();
});

test('calculates probability with 30% prevalence, 95% sensitivity, 85% specificity', async () => {
  await act(async () => {
    render(<App />);
  });

  await act(async () => {
    fireEvent.change(screen.getByLabelText(/Prevalence/i), { target: { value: '30' } });
    fireEvent.change(screen.getByLabelText(/Sensitivity/i), { target: { value: '95' } });
    fireEvent.change(screen.getByLabelText(/Specificity/i), { target: { value: '85' } });

    fireEvent.click(screen.getByText(/Calculate/i));
  });

  expect(screen.getByText(/Probability of disease given positive test/i)).toBeInTheDocument();
  expect(screen.getByText(/Probability of no disease given negative test/i)).toBeInTheDocument();
});

// Edge cases
test('handles edge case with very low sensitivity (1%)', async () => {
  await act(async () => {
    render(<App />);
  });

  await act(async () => {
    fireEvent.change(screen.getByLabelText(/Prevalence/i), { target: { value: '50' } });
    fireEvent.change(screen.getByLabelText(/Sensitivity/i), { target: { value: '1' } });
    fireEvent.change(screen.getByLabelText(/Specificity/i), { target: { value: '99' } });

    fireEvent.click(screen.getByText(/Calculate/i));
  });

  expect(screen.getByText(/Probability of disease given positive test/i)).toBeInTheDocument();
  expect(screen.getByText(/Probability of no disease given negative test/i)).toBeInTheDocument();
});

test('handles edge case with very low specificity (1%)', async () => {
  await act(async () => {
    render(<App />);
  });

  await act(async () => {
    fireEvent.change(screen.getByLabelText(/Prevalence/i), { target: { value: '50' } });
    fireEvent.change(screen.getByLabelText(/Sensitivity/i), { target: { value: '99' } });
    fireEvent.change(screen.getByLabelText(/Specificity/i), { target: { value: '1' } });

    fireEvent.click(screen.getByText(/Calculate/i));
  });

  expect(screen.getByText(/Probability of disease given positive test/i)).toBeInTheDocument();
  expect(screen.getByText(/Probability of no disease given negative test/i)).toBeInTheDocument();
});

test('handles edge case with very low prevalence (0.1%)', async () => {
  await act(async () => {
    render(<App />);
  });

  await act(async () => {
    fireEvent.change(screen.getByLabelText(/Prevalence/i), { target: { value: '0.1' } });
    fireEvent.change(screen.getByLabelText(/Sensitivity/i), { target: { value: '90' } });
    fireEvent.change(screen.getByLabelText(/Specificity/i), { target: { value: '90' } });

    fireEvent.click(screen.getByText(/Calculate/i));
  });

  expect(screen.getByText(/Probability of disease given positive test/i)).toBeInTheDocument();
  expect(screen.getByText(/Probability of no disease given negative test/i)).toBeInTheDocument();
});






