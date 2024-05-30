export interface AccountKeypair {
    address: string;
    publicKey: string;
    privateKey: string;
}

export const accountKeypairFromApi = (data: any) => {
    return {
        address: data.address,
        publicKey: data.public_key,
        privateKey: data.private_key,
    };
};
