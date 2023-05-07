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

## Contributing

Contributions to TimeMorph are welcome! To contribute, please fork the [repository](https://github.com/tonyaellie/time-morph) and submit a pull request with your changes.

## License

TimeMorph is licensed under the MIT License. See the LICENSE file for more information.
