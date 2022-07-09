import type { Reporter, Test, AggregatedResult, TestResult, ReporterOnStartOptions } from '@jest/reporters'

/**
 * @see https://github.com/facebook/jest/blob/master/packages/jest-reporters/src/types.ts
 * @see https://jestjs.io/docs/en/configuration#reporters-arraymodulename--modulename-options
 */
class Analyzer implements Reporter {
  onRunStart(results: AggregatedResult, options: ReporterOnStartOptions): void | Promise<void> {
    console.log('[MY REPORTER] onRunStart!')
  }
  onTestStart(test: Test): void | Promise<void> {
    console.log('[MY REPORTER] onTestStart!')
  }
  onTestResult(test: Test, testResult: TestResult, aggregatedResult: AggregatedResult): void | Promise<void> {
    console.log('[MY REPORTER] onTestResult!')
  }
  onRunComplete(contexts: Set<any>, results: AggregatedResult): void | Promise<void> {
    console.log('[MY REPORTER] onRunComplete!')
  }
  getLastError(): void | Error {
    console.log('[MY REPORTER] last error!')
  }
}

export default Analyzer;
