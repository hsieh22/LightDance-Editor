import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EditingPositionFrame } from "../../../models/EditingPositionFrame";
import { PositionFrame } from "../../../models/PositionFrame";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EditingPositionFrame)
export class EditingPositionFrameRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() editingPositionFrame: EditingPositionFrame, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).editingPositionFrame.findUnique({
      where: {
        userId: editingPositionFrame.userId,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => PositionFrame, {
    nullable: true
  })
  async editingFrame(@TypeGraphQL.Root() editingPositionFrame: EditingPositionFrame, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<PositionFrame | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).editingPositionFrame.findUnique({
      where: {
        userId: editingPositionFrame.userId,
      },
    }).editingFrame({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
