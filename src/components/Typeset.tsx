// @mui
import Stack, { StackProps } from '@mui/material/Stack';
import Typography, { TypographyProps } from '@mui/material/Typography';

interface Props {
  heading?: string;
  caption?: string;
  stackProps?: StackProps;
  headingProps?: TypographyProps;
  captionProps?: TypographyProps;
  textAlign?: 'left' | 'center' | 'right';
}

/***************************  COMMON - TYPESET  ***************************/

export default function Typeset({ heading, caption, stackProps, headingProps, textAlign, captionProps }: Props) {
  const { sx, ...rest } = stackProps || {};

  return (
    <Stack {...rest} sx={{ gap: { xs: 1, sm: 1.5 }, ...sx }}>
      <Typography
        variant="h2"
        {...headingProps}
        sx={{ ...(headingProps?.sx && { ...headingProps.sx }), maxWidth: 700, textAlign: textAlign || 'center', margin: '0px auto' }}
      >
        {heading}
      </Typography>
      {caption && (
        <Typography
          component="p"
          variant="h6"
          {...captionProps}
          sx={{ color: 'text.secondary', ...(captionProps?.sx && { ...captionProps.sx }) }}
        >
          {caption}
        </Typography>
      )}
    </Stack>
  );
}
