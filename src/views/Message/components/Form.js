function Form({handleChange, handleSubmit}) {
  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="email" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          onChange={handleChange}
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="firstName" class="form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          onChange={handleChange}

        />
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">
          Last Name
        </label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          onChange={handleChange}
        />
      </div>
      <div class="mb-3">
        <textarea
          type="text"
          class="form-control"
          id="message"
          placeholder="Write your message..."
          onChange={handleChange}
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" onChange={handleChange} class="form-check-input" id="acceptedMailing" />
        <label class="form-check-label" for="acceptedMailing">
          I want to receive news!
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
