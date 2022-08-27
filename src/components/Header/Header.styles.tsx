import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    titleContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '1rem',
    },
    avatarContainer: {
        display: 'flex',
        alignItems: 'center',
        p: {
            marginLeft: '0.875rem',
        },
    },
    contactModalButtonContents: {
        width: '100%',
        height: '54px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    contactModalButtonAction: {
        fontSize: '0.875rem',
        fontWeight: 'bold',
        color: theme.colorScheme === 'dark' ? 'white' : 'black',
    },
    contactModalButtonAccount: {
        fontSize: '0.6rem',
        color: theme.colorScheme === 'dark' ? 'darkgray' : 'lightgrey',
    },
}));

export { useStyles };
