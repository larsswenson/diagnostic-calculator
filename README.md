# Diagnostic Calculator

This is a simple web app that allows users to input the prevalence of a disease, the sensitivity of a diagnostic test, and the specificity of the test. 
The application then computes and displays the probability of the disease given the test result using Bayes' Theorem.

## Installation

To run this application locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/diagnostic-calculator.git
    ```

2. Navigate to the project directory:
    ```bash
    cd diagnostic-calculator
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the application:
    ```bash
    npm start
    ```

The application will be running at `http://localhost:3000`.

## Usage

1. Open the app in a web browser.
2. Enter the prevalence of the disease.
3. Enter the sensitivity of the diagnostic test.
4. Enter the specificity of the diagnostic test.
5. Click the "Calculate" button to see the probability of the disease given a positive test result and the probability of no disease given a negative test result.

## Testing

This app includes automated tests to verify correctness of calculations and handle edge cases.

To run the tests, use the following command:

```bash
npm test
```

### Test Cases

The app includes several tests to cover both normal and edge cases:

#### Normal Test Cases
1. Prevalence: 10%, Sensitivity: 90%, Specificity: 85%
2. Prevalence: 20%, Sensitivity: 80%, Specificity: 70%
3. Prevalence: 30%, Sensitivity: 95%, Specificity: 85%

#### Edge Test Cases
1. Zero prevalence
2. 100% prevalence
3. Very low sensitivity (1%)
4. Very low specificity (1%)
5. Very low prevalence (0.1%)
