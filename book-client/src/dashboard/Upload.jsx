import { Button, Label, Select, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
const Upload = () => {
  // book categories
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Horror",
    "Science Fiction",
    "Fantasy",
    "Biography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const [select, setSelect] = useState(bookCategories[0]);
  const handleChangeSelect = (e) => {
    setSelect(e.target.value);
  };
  // handle book submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };
    // send data to database
    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("book uploaded successfully");
          form.reset();
        }
      });
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold  capitalize">upload a book</h2>
      {/* form */}
      <form
        onSubmit={handleSubmit}
        className="flex lg:w-[1180px]  flex-col flex-wrap gap-4"
      >
        {/* first row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              type="text"
              name="bookTitle"
              placeholder="Book Name"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              type="text"
              name="authorName"
              placeholder="Author Name"
              required
            />
          </div>
        </div>
        {/* 2nd row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image URL" />
            </div>
            <TextInput
              id="imageURL"
              type="text"
              name="imageURL"
              placeholder="image URL"
              required
            />
          </div>
          {/* category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputState"
              name="category"
              className="w-full  rounded"
              value={select}
              onChange={handleChangeSelect}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        {/* bookDescription */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write Your Book Description"
            required
            className="h-[300px] resize-none w-full"
          />
        </div>
        {/* bookPDFURL */}
        <div className="mb-5">
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            type="text"
            name="bookPDFURL"
            placeholder="Book PDF URL"
            required
            shadow
          />
        </div>
        <Button type="submit">Upload Book</Button>
      </form>
    </div>
  );
};

export default Upload;
