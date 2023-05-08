# Time Morph

TimeMorph is a lightweight package for converting between different time units in JavaScript. It provides a simple API for converting durations from one unit of time to another, such as milliseconds to seconds or hours to days.

## Installation

You can install TimeMorph via npm:

```bash
npm install time-morph
```

## Usage

To use TimeMorph, import the `convertTime` function and pass in an object with the duration to convert and the source and target units. For example:

```typescript
import convertTime from 'time-morph';

const durationInSeconds = convertTime({
  duration: 1000,
  from: 'ms',
  to: 'sec',
}); // 1
```

In this example, the `convertTime` function takes an object with the following properties:

- `duration` (required): The duration to convert, in the source unit of time.
- `from` (required): The source unit of time, specified as one of the following strings: ms, sec, min, hour, day, week, month, or year.
- `to` (optional): The target unit of time, specified as one of the same strings as from. If not specified, the function will return the duration in the source unit of time.

The function returns the converted duration, rounded to the nearest integer.

TimeMorph also provides `setMorphInterval` and `setMorphTimeout` functions for setting intervals and timeouts with durations specified in any unit of time. These functions are similar to the native `setInterval` and `setTimeout` functions, but they accept a duration and unit of time instead of a number of milliseconds. For example:

```typescript
import { setMorphInterval, setMorphTimeout } from 'time-morph';

setMorphInterval(
  () => {
    console.log('Hello, world!');
  },
  {
    duration: 1,
    unit: 'sec',
  }
); // Logs "Hello, world!" every second

setMorphTimeout(
  () => {
    console.log('Hello, world!');
  },
  {
    duration: 1,
    unit: 'sec',
  }
); // Logs "Hello, world!" after one second
```

In these examples, the `setMorphInterval` and `setMorphTimeout` functions take a callback function and an object with the following properties:

- `duration` (required): The duration to wait before executing the callback, in the specified unit of time.
- `unit` (required): The unit of time for the duration, specified as one of the following strings: ms, sec, min, hour, day, week, month, or year.

## Contributing

Contributions to TimeMorph are welcome! To contribute, please fork the [repository](https://github.com/tonyaellie/time-morph) and submit a pull request with your changes.

## License

TimeMorph is licensed under the MIT License. See the LICENSE file for more information.
