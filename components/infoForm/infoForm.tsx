import { Box, Container, Flex, FlexProps } from '@chakra-ui/react'
import { Form, Field, FormLayout, SubmitButton } from '@saas-ui/react'

interface HeroProps extends Omit<FlexProps, 'title'> {
  title: string | React.ReactNode
  description?: string | React.ReactNode
}

export const InfoForm = ({ title, description, children, ...rest }: HeroProps) => {

  const onSubmit = (params) => {
    console.log(params)
    return new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
  }

  return (
    <Flex py="20" alignItems="center" {...rest}>
      <Container>
        <Box
          id="more-info"
          padding={10}
          border="1px solid gray"
          borderRadius={15}
          background='green.50'
        >
          <Form
            defaultValues={{
              name: 'Nguyen Van A',
              description: '',
              phoneNumber: '',
            }}
            onSubmit={onSubmit}
          >
            <FormLayout>
              <Field
                name="name"
                label="Name"
                type="text"
                // help="Choose a name for this project"
                rules={{ required: true }}
              />
              <Field
                name="phoneNumber"
                label="Phone Number"
                type="text"
                rules={{ required: true }}
              />

              <Field
                name="description"
                type="textarea"
                label="Description"
                placeholder="Optional description"
              />

              <SubmitButton
                colorScheme="red">Send Infomation</SubmitButton>
            </FormLayout>
          </Form>

        </Box>

      </Container>
    </Flex>
  )
}
