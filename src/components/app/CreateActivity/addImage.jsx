import React from 'react';
import axios from 'axios';

import { Input } from 'semantic-ui-react';

function AddImageBtn() {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("photo", selectedFile);
    try {
      const response = await axios({
        method: "post",
        url: "http://ronaldfk-server.eddi.cloud:8080/api/activity",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="file" name="photo" onChange={handleFileSelect} />
      <Input type="submit" value="Valider test" />
    </form>
  );
}

export default AddImageBtn;
