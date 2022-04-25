import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

export const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#EBEBEA',
      color: '#222222',
      maxWidth: 300,
      borderRadius: 40,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '40px 30px',
      fontSize: theme.typography.pxToRem(12),
    },
}));
