import React, { useCallback, useEffect } from "react";

function ReactDebug() {
  const [selectedNum, setSelectedNum] = React.useState(10);
  const [allPrimes, setAllPrimes] = React.useState([]);

  // `time` is a state variable that changes once per second,
  // so that it's always in sync with the current time.
  const time = useTime();

  useEffect(() => {
    const tempArray = [];
    // Calculate all of the prime numbers.
    for (let counter = 2; counter < selectedNum; counter++) {
      if (isPrime(counter)) {
        tempArray.push(counter);
      }
    }
    setAllPrimes(tempArray);
  }, [selectedNum]);

  const handleChange = useCallback((event) => {
    // To prevent computers from exploding,
    // we'll max out at 100k
    let num = Math.min(100_000, Number(event.target.value));
    setSelectedNum(num);
  }, []);

  return (
    <>
      <h2>React fun</h2>
      <hr />
      <p className="clock">{`Clock: ${time}`}</p>
      <form>
        <label htmlFor="num">Your number:</label>
        <input type="number" value={selectedNum} onChange={handleChange} />
      </form>
      <p>
        There are {allPrimes.length} prime between 1 and {selectedNum} :{" [ "}
        <span className="prime-list">{allPrimes.join(", ")}</span>
        {" ]"}
      </p>
    </>
  );
}

// This can be moved to hook folder.
function useTime() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return time;
}

// This can be moved to util folder.
function isPrime(n) {
  const max = Math.ceil(Math.sqrt(n));

  if (n === 2) {
    return true;
  }

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }

  return true;
}

export default ReactDebug;
