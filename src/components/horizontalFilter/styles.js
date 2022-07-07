import styled from "styled-components";

export const FilterContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  z-index: 2;
`;

export const SelectionFilterButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonNewCars = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 40px;
  font-size: 16px;
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.transparent};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const ButtonUsedCars = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 40px;
  font-size: 16px;
  font-weight: 400;
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.transparent};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const FormFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  background: ${({ theme }) => theme.colors.transparent};
  border: 1px solid ${({ theme }) => theme.colors.gray700};
  border-radius: 8px;
  margin-top: 12px;
  padding: 0 8px;

  img {
    height: 40px;
  }

  input {
    max-width: 100%;
    height: 40px;
    background: transparent;
    border: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray700};

    &:focus {
      outline: 0;
    }
  }

  select {
    max-width: 100%;
    height: 40px;
    background: transparent;
    border: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray700};

    &:focus {
      outline: 0;
    }
  }

  option {
    width: 100%;
    height: 40px;
    background: ${({ theme }) => theme.colors.gray800};
    border: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray400};
    cursor: pointer;
  }
`;

export const ButtonSearch = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  width: 142px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 4px;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  svg {
    margin-right: 8px;
  }
`;
