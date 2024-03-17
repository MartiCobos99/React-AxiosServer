import { useEffect, useState } from "react";
import axios from "axios";

const usePersons = () => {
  const apiUrl = "http://localhost:3001";
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/persons`).then((response) => {
      const persons = response.data;
      setPersons(persons);
    });
  }, []);

  const updatePersons = (newPersons) => {
    setPersons(newPersons);
  };

  return {
    persons,
    updatePersons,
  };
};

export default usePersons;

export const initialPersons = [
  { name: "Arto Hellas", number: "040-123456", id: 1 },
  { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
  { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
];
