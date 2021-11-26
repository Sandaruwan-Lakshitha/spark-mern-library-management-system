import styled from "styled-components";

import {FluidContainer} from "../componets/CommonComponents";
const Title = styled.h1`
    font-size: 7.5em;
    margin-bottom: 0;
`;

const Subtitle = styled.div`
    font-size: 2.5em;
    margin-top: 0;
`;

const NotFound = () => {
    return ( 
        <FluidContainer>
            <Title>
                404!
            </Title>
            <br />
            <Subtitle>
                The page yot are looking for doesn't exist.
            </Subtitle>
        </FluidContainer>
     );
}
 
export default NotFound;