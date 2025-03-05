import { Box, Button, Card, IconButton, createSvgIcon } from '@mui/material';
import { FlexRow } from '../../UI/containers/flex-row';
import { FlexColumn } from '../../UI/containers/flex-column';
import { Translate } from '../../UI/typographies/translate';
import businessLogo from '../../../assets/businessman-keynote.png';

const CloseIcon = createSvgIcon(
  <svg
    width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 5L15 15M5 15L15 5L5 15Z"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>,
  'Close'
);

const ArrowNarrowRightIcon = createSvgIcon(
  <svg
    width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.1667 6.66666L17.5 10M17.5 10L14.1667 13.3333M17.5 10H2.5"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>,
  'ArrowNarrowRight'
);

const WelcomeCard = () => {
  return (
    <Card
      sx={{ display: 'flex', backgroundColor: '#D4EAF8', position: 'relative' }}
    >
      <FlexRow
        sx={{
          px: 5,
          py: 2.5,
          gap: 12.5,
          width: '93%',
          justifyContent: 'space-between',
        }}
      >
        <FlexColumn
          sx={{
            gap: 1.875,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Translate
            variant="h2"
            sx={{
              color: '#203858',
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: '-0.025em',
            }}
          >
            Welcome to OneForm!
          </Translate>
          <Translate
            sx={{
              color: '#344054',
            }}
          >
            Where education meets empowerment.
          </Translate>
          <Button
            size="medium"
            variant="contained"
            endIcon={<ArrowNarrowRightIcon />}
            sx={{ backgroundColor: '#345BA9', textTransform: 'none' }}
          >
            Take a Tour Today
          </Button>
        </FlexColumn>
        <Box
          component="img"
          alt="keynote"
          src={businessLogo}
          width={172}
          height={172}
        />
      </FlexRow>
      <IconButton
        size="small"
        sx={{ position: 'absolute', right: 10, top: 10 }}
      >
        <CloseIcon />
      </IconButton>
    </Card>
  );
};

export default WelcomeCard;
