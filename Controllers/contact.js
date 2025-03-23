import { Contact } from "../Models/Contact.js";

export const getallcontact = async (req, res) => {
  const userContact = await Contact.find();
  if (!userContact)
    return res.json({ message: "no contact exist", success: false });

  res.json({ message: "all contact fetched", userContact });
};

export const newContact = async (req, res) => {
  const { name, email, phone, type } = req.body;

  if (!name || !email || !phone || !type) {
    return res
      .status(400)
      .json({ error: "All fields are required", success: false });
  }

  let saveContact = await Contact.create({
    name,
    email,
    phone,
    type,
    user: req.user,
  });
  res.json({
    message: "Contact saved successfully",
    saveContact,
    success: true,
  });
};

//update contact by id

export const updateContactById = async (req, res) => {
  const id = req.params.id;
  const { name, email, phone, type } = req.body;
  let updatedContact = await Contact.findByIdAndUpdate(
    id,
    {
      name,
      email,
      phone,
      type,
    },
    { new: true }
  );

  if (!updatedContact) {
    return res.json({ message: "NO Contact exist", success: false });
  }

  res.json({
    message: "contact updated successfully..!",
    updatedContact,
    success: true,
  });
};

// delete contact by id

export const deleteContactById = async (req, res) => {
  const id = req.params.id;

  let deleteContact = await Contact.findByIdAndDelete(id);

  if (!deleteContact) {
    return res.json({ message: "no contact exist", success: false });
  }
  res.json({ message: "conatct deleted successfully", success: true });
};

//get contact by id
export const getContactById = async (req, res) => {
  const id = req.params.id;

  const userContact = await Contact.findById(id);
  if (!userContact)
    return res.json({ message: "no Contact Found", success: false });

  res.json({ message: "Contact Fetched", userContact, success: true });
};

//
export const getContactByUserId = async (req, res) => {
  const id = req.params.id;

  const userContact = await Contact.find({ user: id });
  if (!userContact)
    return res.json({ message: "no Contact Found", success: false });

  res.json({
    message: "User specific contact Fetched",
    userContact,
    success: true,
  });
};
