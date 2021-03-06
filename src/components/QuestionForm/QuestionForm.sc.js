import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle';



export const StyledDialog = styled(Dialog)`
  && {
      .paper-class {
        padding: 32px;
        position: unset;
        height: 600px;
        width: 900px;
        box-shadow: none;
        @media (max-width: 480px) {
          padding: unset;
        }
    }
  }
`

export const ColonText = styled(Typography)`
  && {
      text-align: end;
      @media (max-width: 480px) {
        font-size: 12px;
      }
  }
`

export const LabelTextField = styled(Typography)`
  && {
      font-weight: 600;
      color: #08767a;
      @media (max-width: 480px) {
        font-size: 12px;
      }
  }
`

export const StyledDialogTitle = styled(DialogTitle)`
  && {
      color: #08767a;
      > h2 {
        font-weight: 600;
        @media (max-width: 480px) {
        font-size: 16px;
      }
      }
  }
`


export const ButtonAction = styled(Button)`
  && {
      width: 120px;
      background: #f5d568;
      color: #08767a;

  }
`
