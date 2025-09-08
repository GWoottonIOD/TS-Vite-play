function ErrorMessage(error: Error, resetErrorBoundary :() => void) {
console.error(error.error);
// Call resetErrorBoundary() to reset the error boundary and retry the render.
// Will work for errors caused by changing state, but not syntax errors
return (
<div className="ErrorMessage">
<p>An error occurred:</p>
<pre>{error.error.message}</pre>
<button onClick={() => resetErrorBoundary()}>Try Again?</button>
</div>
);
}

export default ErrorMessage;