// Types
import { TEmployee, TDataSource } from '@/lib/interfaces';

export type TShowEmployee = Omit<
  TEmployee,
  'id' | 'createdAt' | 'lastName' | 'firstName' | 'avatarURL' | 'hiringAgent'
> &
  TDataSource & {
    name: string;
    image: string;
  };

/**
 *  Convert data for table user when render in User page
 * @param users
 * @returns
 */
export const getDataUser = (users: TEmployee[] = []): TShowEmployee[] =>
  users.map((user) => {
    const {
      id,
      firstName,
      lastName,
      level,
      workTime,
      avatarURL,
      position,
      lastActive,
      lastPlace,
      salary,
      experience,
      jobTitle,
    } = user;

    return {
      id,
      workTime,
      level,
      position,
      lastActive,
      lastPlace,
      salary,
      experience,
      jobTitle,
      name: `${firstName} ${lastName}`,
      image: avatarURL,
    };
  });
