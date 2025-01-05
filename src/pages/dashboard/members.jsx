import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
} from "@material-tailwind/react";

import { useFetchUsersQuery } from "@/store/services/azure-organization-service";

export function Members() {
    const { data: members } = useFetchUsersQuery();

    const className = `py-3 px-5 border-b border-blue-gray-50`;
    return (
        <Card className="mt-10">
            <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                <Typography variant="h6" color="white">
                    Members Zindigi
                </Typography>
            </CardHeader>

            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                    <thead>
                        <tr>
                            {["user", "email"].map((el) => (
                                <th
                                    key={el}
                                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                                >
                                    <Typography
                                        variant="small"
                                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                                    >
                                        {el}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {members?.map((member) => (

                            <tr>
                                <td className={className}>
                                    <div className="flex items-center gap-4">
                                        {/* <Avatar src={img} alt={project.name} size="sm" /> */}
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-bold"
                                        >
                                            {member.principalName} - {member.displayName}
                                        </Typography>
                                    </div>
                                </td>
                                <td className={className}>
                                    <Typography
                                        as="a"
                                        href="#"
                                        className="text-xs font-semibold text-blue-gray-600"
                                    >
                                        {member.emailAddress}
                                    </Typography>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    );
}