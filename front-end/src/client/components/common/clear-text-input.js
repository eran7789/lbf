import styled from 'styled-components';

const Input = styled.input`
  background: transparent;
  border: none;
  color: ${({ color }) => color};

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ color }) => color};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${({ color }) => color};
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${({ color }) => color};
  }

  &:focus {
    outline: none;
  }
`;

const ClearTextInput = ({ color, ...rest }) => (
  <Input {...rest} type="text" color={ color } />
);

export default ClearTextInput;