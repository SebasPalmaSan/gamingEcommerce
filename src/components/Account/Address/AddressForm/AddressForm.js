import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { Address } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema } from "./AddressForm.form";

const addressCtrl = new Address();

export function AddressForm(props) {
    const { onClose } = props;
    const { user } = useAuth();

    const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: validationSchema(),
      validateOnChange: false,
      onSubmit: async (formValue) => {
        try {
          await addressCtrl.create(formValue, user.id);

          formik.handleReset();
          onClose();
        } catch (error) {
          console.error(error);
        }
      }
    });

  return (
    <Form onSubmit={formik.handleSubmit}>
        <Form.Input 
          name='title' 
          placeholder='Ingresa tu nueva dirección' 
          value={formik.values.title} 
          onChange={formik.handleChange} 
          error={formik.errors.title} 
        />

        <Form.Group widths='equal'>
          <Form.Input 
            name='name' 
            placeholder='Nombre y Apellidos' 
            value={formik.values.name} 
            onChange={formik.handleChange} 
            error={formik.errors.name}  
          />
          <Form.Input 
            name='address' 
            placeholder='Dirección' 
            value={formik.values.address} 
            onChange={formik.handleChange} 
            error={formik.errors.address}  
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Input 
            name='state' 
            placeholder='Provincia' 
            value={formik.values.state} 
            onChange={formik.handleChange} 
            error={formik.errors.state}  
          />
          <Form.Input 
            name='city' 
            placeholder='Ciudad' 
            value={formik.values.city} 
            onChange={formik.handleChange} 
            error={formik.errors.city}  
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Input 
            name='postal_code' 
            placeholder='Código Postal' 
            value={formik.values.postal_code} 
            onChange={formik.handleChange} 
            error={formik.errors.postal_code} 
          />
          <Form.Input 
            name='phone' 
            placeholder='Telefono' 
            value={formik.values.phone} 
            onChange={formik.handleChange} 
            error={formik.errors.phone} 
          />
        </Form.Group>

        <Form.Button type="submit" fluid loading={formik.isSubmitting}>
          Enviar
        </Form.Button>
    </Form>
  )
}
