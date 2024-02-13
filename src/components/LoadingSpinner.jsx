function LoadingSpinner() {
  return (
    <>
      <center>
        <h1>Loading</h1>
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </center>
    </>
  );
}
export default LoadingSpinner;
