import styled from "styled-components";
import useRegister from "./useRegister";

const Container = styled.div`
  flex: 2;
  box-shadow: 0 0 5px rgba(3, 0, 0, 0.2);
  width: 800px;
  text-align: center;
  h2 {
    text-align: center;
    margin: auto;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    height: 50px;
  }
  .mainSelect {
    color: gray;
  }
  input {
    width: 80%;
    height: 35px;
    font-size: 20px;
    padding: 5px;
    margin: auto;
  }
  label {
    margin-top: 10px;
  }
  .description {
    padding: 10px;
    width: 80%;
    height: 100px;
  }
  .img-input {
    height: 50px;
  }
`;

const Register = () => {
  const { setValues } = useRegister();

  const handleFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValues(reader.result, "img");
      };
      reader.readAsDataURL(file);
    } else {
      setValues("", "img");
    }
  };
  return (
    <Container>
      <div className="title">
        <h2>Register Product</h2>
      </div>
      <form action="">
        <div>
          <label htmlFor="">Name:</label>
          <br />
          <input type="text" onChange={(event) => setValues(event.target.value, "name")} />
        </div>
        <div>
          <label htmlFor="">Description:</label>
          <br />
          <textarea className="description" type="text" />
        </div>
        <div>
          <label htmlFor="">Category:</label>
          <br />
          <select name="" id="">
            <option className="mainSelect" selected disabled value="">
              Categories
            </option>
            <option value="">Games</option>
            <option value="">Clothes</option>
            <option value="">Phones</option>
            <option value="">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Value:</label>
          <br />
          <input
            type="text"
            placeholder="0,00"
            onChange={(event) => setValues(event.target.value, "price")}
          />
        </div>
        <div>
          <label htmlFor="">Cover Image:</label>
          <br />
          <input className="img-input" type="file" accept="image/*" onChange={handleFile} />
        </div>
        <div>
          <label htmlFor="">Image Details:</label>
          <br />
          <input className="img-input" type="file" multiple accept="image/*" />
        </div>
        <input type="submit" />
      </form>
    </Container>
  );
};

export default Register;
