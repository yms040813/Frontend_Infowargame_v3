import styled from "styled-components";

export const Event = styled.div`
    width: 120px;
    height: 48px;
    position: absolute;
    left: 370px;
    top: 15px;
    font-weight: 900;
    font-size: 35px;
    line-height: 52px;
    text-align: center;
`

export const Banner = styled.div`
    width: 1400px;
    height: 460px;
    position: absolute;
    left: 375px;
    top: 80px;
    background-image: url(${process.env.PUBLIC_URL + "/images/security-265130.jpg"});
    background-position: 50% 35%;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;
`

export const Notice = styled(Event)`
    width: 150px;
    height: 48px;
    top: 560px;
`
 
export const List1 = styled.div`
    position: absolute;
    width: 675px;
    height: 110px;
    left: 400px;
    top: 624px;
    background-color: #2C2C2C;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
`

export const List2 = styled(List1)`
    top: 755px;
`

export const List3 = styled(List1)`
    top: 888px;
`

export const List4 = styled(List1)`
    left: 1142px;
`

export const List5 = styled(List1)`
    top: 755px;
    left: 1142px;
`

export const List6 = styled(List1)`
    top: 888px;
    left: 1142px;
`