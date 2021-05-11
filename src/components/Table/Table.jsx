import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Modal from "../Modal/Modal";

import {
  TableWrapper,
  TableHeader,
  TableBody,
  Th,
  ThAction,
  Tr,
  Td,
  TdAction,
  RemoveButton,
  TableEmpty,
} from "./TableStyles";
import {
  ButtonTable,
  Form,
  FormRow,
  FormTwoColumns,
  InputLabel,
  InputText,
  TextArea,
  Select,
  SelectOption,
  InputError,
  ButtonSubmit,
} from "../../lib/style/generalStyles";
import categoriesMock from "./../../lib/mock/eventCategories";
import companiesMock from "./../../lib/mock/companies";


const Table = () => {
  const categories = [...categoriesMock];
  const companies = [...companiesMock];


  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      id: 1,
      title: "",
      description: "",
      category: "",
      date: "",
      startTime: "",
      endTime: "",
      capacity: "",
      company: "",
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      category: Yup.string().required("Category is required"),
      date: Yup.string().required("Date is required"),
      startTime: Yup.string().required("Start time is required"),
      endTime: Yup.string().required("End time is required"),
      capacity: Yup.number().required("Capacity is required"),
      company: Yup.string().required("Company name is required"),
    }),

    onSubmit: (values, {resetForm}) => {
      setEvents([...events, values]);
      setIsModalOpen(false);
      resetForm({});
    },
  });

  const handleDeleteEvent = (index) => {
    const newEvents = [...events];
    newEvents.splice(index, 1); 
    setEvents(newEvents);
  };

  return (
    <>
      <ButtonTable onClick={() => setIsModalOpen(true)}>Add event</ButtonTable>
      <Modal
        title="Add event"
        isVisible={isModalOpen}
        handleClose={() => {
          setIsModalOpen(false);
        }}
      >
        <Form fullWidth onSubmit={formik.handleSubmit}>
          <FormRow>
            <InputLabel htmlFor="title">Title</InputLabel>
            <InputText
              id="title"
              type="text"
              {...formik.getFieldProps("title")}
            />
            {formik.touched.title && formik.errors.title && (
              <InputError>{formik.errors.title}</InputError>
            )}
          </FormRow>
          <FormRow>
            <InputLabel htmlFor="description">Description</InputLabel>
            <TextArea
              id="description"
              {...formik.getFieldProps("description")}
            />
            {formik.touched.description && formik.errors.description && (
              <InputError>{formik.errors.description}</InputError>
            )}
          </FormRow>

          <FormTwoColumns>
            <FormRow>
              <InputLabel htmlFor="category">Category</InputLabel>
              <Select
                id="category"
                {...formik.getFieldProps("category")}
              >
                <SelectOption value="">Select</SelectOption>
                {categories.map((category) => 
                  <SelectOption key={category.value} value={category.value}>{category.label}</SelectOption>
                )}
              </Select>
              {formik.touched.category && formik.errors.category && (
                <InputError>{formik.errors.category}</InputError>
              )}
            </FormRow>
            <FormRow>
              <InputLabel htmlFor="date">Date</InputLabel>
              <InputText
                id="date"
                type="text"
                {...formik.getFieldProps("date")}
              />
              {formik.touched.date && formik.errors.date && (
                <InputError>{formik.errors.date}</InputError>
              )}
            </FormRow>
          </FormTwoColumns>

          <FormTwoColumns>
            <FormRow>
              <InputLabel htmlFor="startTime">Start time</InputLabel>
              <InputText
                id="startTime"
                type="text"
                {...formik.getFieldProps("startTime")}
              />
              {formik.touched.startTime && formik.errors.startTime && (
                <InputError>{formik.errors.startTime}</InputError>
              )}
            </FormRow>
            <FormRow>
              <InputLabel htmlFor="endTime">End time</InputLabel>
              <InputText
                id="endTime"
                type="text"
                {...formik.getFieldProps("endTime")}
              />
              {formik.touched.endTime && formik.errors.endTime && (
                <InputError>{formik.errors.endTime}</InputError>
              )}
            </FormRow>
          </FormTwoColumns>

          <FormTwoColumns>
            <FormRow>
              <InputLabel htmlFor="capacity">Capacity</InputLabel>
              <InputText
                id="capacity"
                type="number"
                {...formik.getFieldProps("capacity")}
              />
              {formik.touched.capacity && formik.errors.capacity && (
                <InputError>{formik.errors.capacity}</InputError>
              )}
            </FormRow>
            <FormRow>
              <InputLabel htmlFor="company">Company</InputLabel>
              <Select
                id="company"
                {...formik.getFieldProps("company")}
              >
                <SelectOption value="">Select</SelectOption>
                {companies.map((company) => 
                  <SelectOption key={company.value} value={company.value}>{company.label}</SelectOption>
                )}
              </Select>
              {formik.touched.company && formik.errors.company && (
                <InputError>{formik.errors.company}</InputError>
              )}
            </FormRow>
          </FormTwoColumns>
          <FormRow>
            <ButtonSubmit type="submit">Add event</ButtonSubmit>
          </FormRow>
        </Form>
      </Modal>
      {events.length ? (
        <TableWrapper>
          <TableHeader>
            <Tr>
              <Th>ID</Th>
              <Th>Naslov</Th>
              <Th>Datum</Th>
              <Th>Vrijeme od</Th>
              <Th>Vrijeme do</Th>
              <Th>Kapacitet</Th>
              <Th>Firma</Th>
              <ThAction></ThAction>
            </Tr>
          </TableHeader>
          <TableBody>
            {events.map((event, index) => (
              <Tr key={index}>
                <Td>{event.id}</Td>
                <Td>{event.title}</Td>
                <Td>{event.date}</Td>
                <Td>{event.startTime}</Td>
                <Td>{event.endTime}</Td>
                <Td>{event.capacity}</Td>
                <Td>{event.company}</Td>
                <TdAction>
                  <RemoveButton onClick={() => handleDeleteEvent(index)} />
                </TdAction>
              </Tr>
            ))}
          </TableBody>
        </TableWrapper>
      ) : (
        <TableEmpty>There are no events yet!</TableEmpty>
      )}
    </>
  );
};

export default Table;
