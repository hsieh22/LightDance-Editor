import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ControlFrame } from "../../../models/ControlFrame";
import { EditingControlFrame } from "../../../models/EditingControlFrame";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EditingControlFrame)
export class EditingControlFrameRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() editingControlFrame: EditingControlFrame, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).editingControlFrame.findUnique({
      where: {
        userId: editingControlFrame.userId,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => ControlFrame, {
    nullable: true
  })
  async editingFrame(@TypeGraphQL.Root() editingControlFrame: EditingControlFrame, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<ControlFrame | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).editingControlFrame.findUnique({
      where: {
        userId: editingControlFrame.userId,
      },
    }).editingFrame({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
