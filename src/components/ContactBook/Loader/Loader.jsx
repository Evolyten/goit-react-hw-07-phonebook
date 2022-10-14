import { InfinitySpin } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderWrap = styled.div`
  text-align: center;
`;

export default function Loader() {
  return (
    <LoaderWrap>
      <InfinitySpin width="200" color="#4fa94d" />
    </LoaderWrap>
  );
}
