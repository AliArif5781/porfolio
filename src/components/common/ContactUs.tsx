const ContactUs = () => {
  return (
    <div className="login-container">
      <div className="form-container">
        <form
          className="form"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="1d09c616-5bd6-42c9-a824-2a88898e60fb"
          />

          <div className="grid-section py-5">
            <div className="form-group">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                className="px-3 py-2 border border-gray-300 rounded-md w-[15rem]"
                placeholder="E.g. John"
                autoComplete="given-name"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="E.g. address@example.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="form-group py-3">
            <label
              htmlFor="Description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              name="Description"
              id="Description"
              rows={5}
              className="w-full border rounded-lg"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black-350 text-white px-[.8rem] py-[.4rem] rounded-lg"
          >
            click
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
