"use client";

import { Modal, ModalContent, Button } from "@nextui-org/react";

type Props = {
	isOpen: boolean;
	onOpen: () => void;
	onOpenChange: () => void;
	children: React.ReactNode;
};
export default function FullModal({
	isOpen,
	onOpen,
	onOpenChange,
	children,
}: Props) {
	return (
		<>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				isDismissable={false}
				isKeyboardDismissDisabled={true}
				size="full"
			>
				<ModalContent>{(onClose) => <>{children}</>}</ModalContent>
			</Modal>
		</>
	);
}
