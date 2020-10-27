import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'

import Add from '@material-ui/icons/AddRounded'

export const Wrapper = styled.div`
  background: #fff;
  max-width: 900px;
  width: 100%;
  min-height: 600px;
  margin: 0 auto;
  border-radius: 5px;
    > div {
      padding: 16px;

    }
`


export const NoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  height: 300px;
  color: #08767a;
  border-radius: 5px;
  margin: 16px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`


export const TitleText = styled(Typography)`
  && {
    color: #fff;
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`


export const AddButton = styled(Button)`
  && {
    color: #08767a;
    border-color: #fff;
    background:#fff;
    text-transform: capitalize;
    @media (max-width: 480px) {
      font-size: 12px;
      padding: 4px 10px;
    }
  }
`


export const ActionButtonWrapper = styled(IconButton)`
  && {
    > span {
      color: #08767a
    }
  }
`

export const NumberWrapper = styled(ListItemIcon)`
  && {
    > div {
      width: 80px;
      text-align: center;
      color: #08767a;
      background-color: #f5d568;
      text-transform: capitalize;
      border-radius: 16px;
      font-size: 12px;
      padding: 8px;
      margin-right: 8px
    }
  }
`


export const AddIcon = styled(Add)`
  && {
    color: #fff;
    background: #f5d568;
    border-radius: 50%;
    @media (max-width: 480px) {
      width: 12px;
      height: 12px;
      margin-top: -2px;
    }
  }
`

export const HeaderWrapper = styled(Grid)`
  && {
    margin: -30px auto 0px;
    width: 95%;
    display: flex;
    background: #08767a;
    border-radius: 5px;
    > div {
      align-items: center;
      display: flex;
    }
  }
`

