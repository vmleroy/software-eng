import React, { useState } from 'react';

import {
  Button, Modal, Grid, Switch, FormControl,
  InputLabel, Select, MenuItem, SelectChangeEvent,
  Typography, IconButton
}
  from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import IPizza from '../../interfaces/IPizza';

interface Props {
  modalOpen: boolean,
  idPizza: string,
  pizzas: IPizza[],
  handleCloseModalWithPizza: (id: string[]) => void,
  handleCloseModal: () => void
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Pizza2FlavoursModal: React.FC<Props> = ({
  modalOpen, idPizza, pizzas, 
  handleCloseModalWithPizza, handleCloseModal
}) => {

  const [halfPizza, sethalfPizza] = useState(false);
  const [pizza, setPizza] = useState<string>('');
  const [idPizzas, setIdPizzas] = useState<string[]>([])


  const handleClickAddShoppingCart = () => {
    idPizzas.push(idPizza);
    if (halfPizza) {
      idPizzas.push(pizza);
    }
    handleCloseModalWithPizza(idPizzas);
  }

  const handleExitButton = () =>  {
    handleCloseModal();
  }

  const handleChange = (event: SelectChangeEvent) => {
    setPizza(event.target.value as string);
  };

  return (
    <Modal
      open={modalOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid
        alignSelf="center"
        direction="column"
        justifyContent="center"
        sx={style}
      >
        <IconButton onClick={() => { handleExitButton() }}>
          <CloseIcon />
        </IconButton>
        <Grid
          container
          item
          justifyContent="center"
          justifyItems="center"
          alignContent="center"
          alignItems="center"
          direction="column"
        >
          <Typography>Deseja Pizza meio a meio?</Typography>
          <Switch onChange={(e) => { sethalfPizza(e.target.checked) }}
            defaultChecked={false}
          />
          {halfPizza &&
            <Grid>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sabores</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={pizza}
                  label="Sabores"
                  onChange={handleChange}
                  sx={{ minWidth: 200 }}
                >
                  {pizzas?.map((item: IPizza) => {
                      if (item._id != idPizza)
                        return <MenuItem value={item._id}> {item.name} </MenuItem>
                    }
                  )}
                </Select>
              </FormControl>
            </Grid>
          }
          <Button
            onClick={() => { handleClickAddShoppingCart() }}
            sx={{ margin: 2 }}
          >
            Adicionar ao carrinho
          </Button>
        </Grid>
      </Grid>
    </Modal>
  )
}

export default Pizza2FlavoursModal;