export default Forms;

function Forms() {
  const [form, setForm] = useState({username: "", email: ""});

  const handleChange = (e)=>{
    setForm({...form, [e.target.name] : e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Enter UserName..."
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}