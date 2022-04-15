import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

export const ConfirmationDialog = ({open, title, content, onsubmit, oncancel}) => {
  return (
      <Dialog open={open} >
          <DialogTitle>
            {title}
          </DialogTitle>
          <DialogContent>
            {content}
          </DialogContent>
          <DialogActions>
              <Button onClick={oncancel} >Cancel</Button>
              <Button onClick={onsubmit} >Submit</Button>
          </DialogActions>
    </Dialog>
  )
}
