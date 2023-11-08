import { useState } from "react";
import { useCreateStudentMutation } from "./studentSlice";

/** Form for creating new students */
export default function NewStudent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [gpa, setGpa] = useState(0.0);

  const [createStudent] = useCreateStudentMutation();

  const create = async (evt) => {
    evt.preventDefault();
    createStudent({ firstName, lastName, email, imageUrl, gpa });
  };

  return (
    <form onSubmit={create}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>

      <label>
        Email:
        <input
          type= "email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Image Url:
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </label>

      <label>
        GPA:
        <input
          type="number"
          value={gpa}
          onChange={(e) => setGpa(e.target.value)}
          required
        />
      </label>

      <button>Create</button>
    </form>
  );
}
