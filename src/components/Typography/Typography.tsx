import { Title } from '../Title';
import { Subtitle } from '../Subtitle';
import { Text } from '../Text';
import { Labeling } from '../Labeling';
import { Microlabeling } from '../Microlabeling';
import { Value } from '../Value';

export const Typography = {
  Title,
  Subtitle,
  Text,
  Label: Labeling,
  Microlabel: Microlabeling,
  Value,
} as const;