import { Button, Label, Select, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
const Edit = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, bookDescription, bookPDFURL } =
    useLoaderData();
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
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };
    // update data to database
    fetch(`http://localhost:5000/update-book/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateBookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          alert("Book Data Updated successfully");
        }
      });
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold  capitalize">
        update the book data
      </h2>
      {/* form */}
      <form
        onSubmit={handleUpdate}
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
              defaultValue={bookTitle}
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
              defaultValue={authorName}
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
              defaultValue={imageURL}
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
            defaultValue={bookDescription}
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
            defaultValue={bookPDFURL}
          />
        </div>
        <Button type="submit">Update Book</Button>
      </form>
    </div>
  );
};

export default Edit;
