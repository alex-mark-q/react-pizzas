import { forwardRef } from "react"

const Results = forwardRef((props, ref) => {
  return (
    <div ref={ref} />
  );
});

export default Results;
